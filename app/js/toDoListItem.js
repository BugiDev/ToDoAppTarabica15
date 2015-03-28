/**
 * Created by bogdanbegovic on 3/25/15.
 */
define(['knockout', 'jquery'], function (ko, $) {
    'use strict';
    return function ToDoListItem(text, isChecked) {
        var self = this;

        self.text = ko.observable(text);
        self.isChecked = ko.observable(isChecked);

    };
});
