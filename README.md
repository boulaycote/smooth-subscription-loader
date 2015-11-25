#smooth-subscription-loader

Provides a way of showing subscription based data smoothly once it's ready. A loader will show after 750ms, only if the subscription is not yet ready.

##usage
```html
{{#smoothSubscriptionLoader subscription=itemsSubscription loader='loader'}}
	{{#each items}}
		<li>{{name}}</li>
	{{/each}}
{{/smoothSubscriptionLoader}}
```
* `subscription` the subscription the loader should wait for.
* `loader` define a `loader` template to show until the subscription is ready. You can also simply define a template like so:
	
	```html
		<template name='loader'>
			...
		</template
	```
	If no `loader` template is specified, the default one will take over.