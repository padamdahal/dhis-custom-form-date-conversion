$(document).ready(function(){
	/***************** registration *********************/
	// Date of admission - Event
	$("#tTQr7cLOXOi-SDZ8k24XOtR-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("#tTQr7cLOXOi-SDZ8k24XOtR-val").trigger("change");
			$("#tTQr7cLOXOi-SDZ8k24XOtR-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("body input[name=eventDate]").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("body input[name=eventDate]").trigger("change");
			$("body input[name=eventDate]").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
		
	// Date of birth - event
	$("d2-custom-data-entry-form #tTQr7cLOXOi-o1wH0CNAwiI-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #tTQr7cLOXOi-o1wH0CNAwiI-val").trigger("change");
			$("d2-custom-data-entry-form #tTQr7cLOXOi-o1wH0CNAwiI-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #tTQr7cLOXOi-WXHUaOqMYde-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #tTQr7cLOXOi-WXHUaOqMYde-val").trigger("change");
			$("d2-custom-data-entry-form #tTQr7cLOXOi-WXHUaOqMYde-val").trigger("blur");
			
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	/**************** End of registration *******************************/
	// TODO : add code for all date fields
});

