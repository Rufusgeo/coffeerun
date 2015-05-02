define(['knockout', 'text!./contact.html'], function(ko, templateMarkup) {

  function ContactPage(params) {

    this.availableTimes = [
        { timeText: "5 minutes", time: 5 },
        { timeText: "10 minutes", time: 10 },
        { timeText: "15 minutes", time: 15 }
    ];

    this.leavingTime = ko.observable({timeText: "5 minutes", time: 5 });
    this.maxcups = ko.observable(6);
    this.owner = ko.observable('');

  }

  ContactPage.prototype.createRun = function() {

  		var self = this;

		$.ajax({
		    type: "POST",
		    url: "/api/coffeerun",
		    data: JSON.stringify({owner: self.owner(), leavingTime: self.leavingTime().time, maxcups: self.maxcups() }),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(data){ },
		    failure: function(errMsg) {
		        alert(errMsg);
		    }
		});

  };

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ContactPage.prototype.dispose = function() { };
  
  return { viewModel: ContactPage, template: templateMarkup };

});
