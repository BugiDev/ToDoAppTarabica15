
/**
 * Created by bogdanbegovic on 11/21/14.
 */

define([
    'knockout',
    'toDoList'
],function(ko, ToDoList){
    'use strict';

    describe('ToDoList - ', function () {

        var toDoList = {};

        beforeEach(function () {
            toDoList = new ToDoList('Exercise');
        });

        it('should exist', function () {
            expect(toDoList).toBeDefined();
        });

        it('should have text Work out!', function () {
            expect(ko.utils.unwrapObservable(toDoList.listName)).toEqual('Exercise');
        });

        it('should add new item in list', function () {
            toDoList.newItemText('New List');
            toDoList.addNewToDoItem();
            expect(toDoList.listItems().length).toEqual(1);
        });

        it('should show number of finished tasks', function () {
            toDoList.newItemText('New List');
            toDoList.addNewToDoItem();
            toDoList.listItems()[0].isChecked(true);
            expect(toDoList.finishedNumber()).toEqual('1 finished tasks');
        });

    });

});

