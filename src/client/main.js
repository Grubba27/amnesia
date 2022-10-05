import { Meteor } from 'meteor/meteor';
import App from './ui/App.svelte';


Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});
