$(document).ready(function(){
	/***************** registration *********************/
	// Date of admission
	$("d2-custom-registration-form input[name=sc3Rnbby1d3]").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-registration-form input[name=sc3Rnbby1d3]").trigger("change");
			$("d2-custom-registration-form input[name=sc3Rnbby1d3]").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("body input[name=enrollmentDate]").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("body input[name=enrollmentDate]").trigger("change");
			$("body input[name=enrollmentDate]").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	// Date of admission - Event
	$("d2-custom-data-entry-form #tTQr7cLOXOi-SDZ8k24XOtR-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #tTQr7cLOXOi-SDZ8k24XOtR-val").trigger("change");
			$("d2-custom-data-entry-form #tTQr7cLOXOi-SDZ8k24XOtR-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("body input[name=eventDate]").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("body input[name=eventDate]").trigger("change");
			$("body input[name=eventDate]").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	// Date of birth
	$("d2-custom-registration-form input[name=zl67CJrVriH]").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-registration-form input[name=zl67CJrVriH]").trigger("change");
			$("d2-custom-registration-form input[name=zl67CJrVriH]").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-registration-form input[name=PmNAxfGCleK]").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-registration-form input[name=PmNAxfGCleK]").trigger("change");
			$("d2-custom-registration-form input[name=PmNAxfGCleK]").trigger("blur");
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
	
	//testing Git
	
	/**************** End of registration *******************************/
	
	/***************** Admission and Diagnosis stage *********************/
	// Date of onset symptoms
	$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").css('visibility','hidden');
	
	$("d2-custom-data-entry-form #ZJ4pp4MaqOg-UAfg0mQNUzY-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {			
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-UAfg0mQNUzY-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-UAfg0mQNUzY-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	/*
	$("d2-custom-data-entry-form #ZJ4pp4MaqOg-UAfg0mQNUzY-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			console.log("inside onset textbox");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-UAfg0mQNUzY-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-UAfg0mQNUzY-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-VtjK3vFGeI6-val").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	*/
	// Date of RK39
	$("d2-custom-data-entry-form #ZJ4pp4MaqOg-LwFM4VWRbUv-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-LwFM4VWRbUv-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-LwFM4VWRbUv-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-D4vyMkhcprc-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-D4vyMkhcprc-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-D4vyMkhcprc-val").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	// Date of BM Nepali
	$("d2-custom-data-entry-form #ZJ4pp4MaqOg-xXHjgvwOwQv-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-xXHjgvwOwQv-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-xXHjgvwOwQv-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-ijnURhduPVL-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-ijnURhduPVL-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-ijnURhduPVL-val").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	// Date of SP
	$("d2-custom-data-entry-form #ZJ4pp4MaqOg-PWz8yLdbkeg-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-PWz8yLdbkeg-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-PWz8yLdbkeg-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-ayMYbg5E38B-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-ayMYbg5E38B-val").trigger("change");
			$("d2-custom-data-entry-form #ZJ4pp4MaqOg-ayMYbg5E38B-val").trigger("blur");
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	/***************** End admission and diagnosis stage *********************/
	
	/******************* KA Treatment ********************/
	// Date start of treatment
	$("d2-custom-data-entry-form #wqxIyvDXU8R-XCXlfeHO9Nl-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #wqxIyvDXU8R-XCXlfeHO9Nl-val").trigger("change");
			$("d2-custom-data-entry-form #wqxIyvDXU8R-XCXlfeHO9Nl-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #wqxIyvDXU8R-zTlG07vQQ52-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #wqxIyvDXU8R-zTlG07vQQ52-val").trigger("change");
			$("d2-custom-data-entry-form #wqxIyvDXU8R-zTlG07vQQ52-val").trigger("blur");
			
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	// End of treatment date
	$("d2-custom-data-entry-form #wqxIyvDXU8R-FPtwX42RYUO-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #wqxIyvDXU8R-FPtwX42RYUO-val").trigger("change");
			$("d2-custom-data-entry-form #wqxIyvDXU8R-FPtwX42RYUO-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #wqxIyvDXU8R-IdpQZvbXUOy-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #wqxIyvDXU8R-IdpQZvbXUOy-val").trigger("change");
			$("d2-custom-data-entry-form #wqxIyvDXU8R-IdpQZvbXUOy-val").trigger("blur");
			
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
	
	/******************** End of KA Treatment ************/
	
	/************** initial treatment outcome ****************/
	
	$("d2-custom-data-entry-form #YaEQ3p2vtZ6-KpsLzDChXhp-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #YaEQ3p2vtZ6-KpsLzDChXhp-val").trigger("change");
			$("d2-custom-data-entry-form #YaEQ3p2vtZ6-KpsLzDChXhp-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #YaEQ3p2vtZ6-GXLTsvHIKG8-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #YaEQ3p2vtZ6-GXLTsvHIKG8-val").trigger("change");
			$("d2-custom-data-entry-form #YaEQ3p2vtZ6-GXLTsvHIKG8-val").trigger("blur");
			
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
		
	/************* end initial treatment outcome ***************/
	
	/************** Final treatment outcome ****************/
	
	$("d2-custom-data-entry-form #GdYfroIDDmN-rH2a5ytZIBg-val").calendarsPicker({
		calendar: $.calendars.instance('nepali'),
		yearRange: '-120:+30',
		duration: "fast",
	    showAnim: "",
		dateFormat: 'yyyy-mm-dd',
		onSelect: function(dates) {
			$("d2-custom-data-entry-form #GdYfroIDDmN-rH2a5ytZIBg-val").trigger("change");
			$("d2-custom-data-entry-form #GdYfroIDDmN-rH2a5ytZIBg-val").trigger("blur");
			var bsConvertor = new BikramSambatConverter();
			var npDate = String(dates);
			var enDate = bsConvertor.nep_to_eng(npDate.substring(0,4), npDate.substring(5,7), npDate.substring(8,10));
			$("d2-custom-data-entry-form #GdYfroIDDmN-MKtMbBB0tNB-val").val(enDate.year+"-"+enDate.month+"-"+enDate.date);
			$("d2-custom-data-entry-form #GdYfroIDDmN-MKtMbBB0tNB-val").trigger("change");
			$("d2-custom-data-entry-form #GdYfroIDDmN-MKtMbBB0tNB-val").trigger("blur");
			
			$('.ui-datepicker-cmd-close').trigger("click");
		}
	});
		
	/************* end initial treatment outcome ***************/
	
});

