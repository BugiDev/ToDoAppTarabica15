/**
 * Created by bogdanbegovic on 3/25/15.
 */
define(['knockout', 'toDoListItem', 'jquery'], function (ko, ToDoListItem, $) {
    'use strict';
    return function ToDoList(listName) {
        var self = this;

        self.listName = ko.observable(listName);
        self.listItems = ko.observableArray();
        self.newItemText = ko.observable();

        self.finishedNumber = ko.computed(function() {
            var result = 0;
            for (var i = 0; i < self.listItems().length; i ++) {
                if(self.listItems()[i].isChecked()){
                    result++;
                }
            }
            return result + ' finished tasks';
        }, self);

        self.addNewToDoItem = function (){
            if(self.newItemText() !== undefined && self.newItemText() !== ''){
                self.listItems.push(new ToDoListItem(self.newItemText(), false));
                self.newItemText('');
            }
        };

    };
});
