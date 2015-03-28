/**
 * Created by bogdanbegovic on 3/25/15.
 */
define(['knockout', 'toDoList', 'jquery'], function (ko, ToDoList, $) {
    'use strict';
    return function MainToDoViewModel() {
        var self = this;

        self.toDoLists = ko.observableArray();

        self.newListName = ko.observable();
        self.shouldShowNewListNameField = ko.observable(false);

        self.addNewToDoList = function (){
            self.toDoLists.push(new ToDoList(self.newListName()));
            self.newListName('');
            self.shouldShowNewListNameField(false);
            var addNewPlaceholders = $( '.new-list-placeholder' );
            if(addNewPlaceholders.length>1){
                addNewPlaceholders[0].remove();
            }
        };

        self.toDoListRows = ko.computed(function() {
            var result = [];
            for (var i = 0; i < self.toDoLists().length; i += 3) {
                var row = [];
                for (var j = 0; j < 3; ++j) {
                    if (self.toDoLists()[i + j]) {
                        row.push(self.toDoLists()[i + j]);
                    }
                }
                result.push(row);
            }
            return result;
        }, self);

        self.showAddNewList = function(){
            self.shouldShowNewListNameField(true);
        };

    };
});
