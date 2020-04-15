import { Template } from 'meteor/templating';
import { Entries } from '../api/entries';

import './entry.html'

Template.entry.events({
    'click .delete'() {
        Entries.remove(this._id)
    }
})