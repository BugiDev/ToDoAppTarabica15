
/**
 * Created by bogdanbegovic on 11/21/14.
 */

define([
    'knockout',
    'toDoListItem'
],function(ko, ToDoListItem){
    'use strict';

    describe('ToDoListItem - ', function () {

        var toDoItem = {};

        beforeEach(function () {
            toDoItem = new ToDoListItem('Work out!', false);
        });

        it('should exist', function () {
            expect(toDoItem).toBeDefined();
        });

        it('should have text Work out!', function () {
            expect(ko.utils.unwrapObservable(toDoItem.text)).toEqual('Work out!');
        });

        it('should not be checked', function () {
            expect(ko.utils.unwrapObservable(toDoItem.isChecked)).toEqual(false);
        });

    });

});

