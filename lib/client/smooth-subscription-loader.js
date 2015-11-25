Template.smoothSubscriptionLoader.onCreated(function () {
	var subscription = this.data.subscription;

	this.autorun(function () {
		if (subscription.ready()) {
			$('.smooth-subscription-loader').fadeOut(function () {
				$('.smooth-subscription-loader-content-block').fadeIn();	
			})
		}
	});
});

Template.smoothSubscriptionLoader.onRendered(function () {
	var subscription = this.data.subscription;

	Meteor.setTimeout(function () {
		if (!subscription.ready()) {
			$('.smooth-subscription-loader').fadeIn();
		}
	}, 500);
});

Template.smoothSubscriptionLoader.helpers({
	loader: function () {
		var loader = Template.instance().data.loader || 'loader';
		
		return Template[loader];
	}
});
