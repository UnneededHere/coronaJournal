import { Template } from 'meteor/templating';

import { Entries } from '../api/entries.js';

import './body.html';
import './entry.js';


Template.body.helpers({
    entries() {
        return Entries.find({}, { sort: { createdAt: -1 } });
    }
});

Template.body.events({
    'submit .new-entry'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;
        const heading = target.heading.value;

        Entries.insert({
            heading,
            text,
            createdAt: new Date()
        })

        target.heading.value = '';
        target.text.value = '';
    }
})