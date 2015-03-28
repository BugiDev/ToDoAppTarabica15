
/**
 * Created by bogdanbegovic on 11/21/14.
 */

define([
    'knockout',
    'mainToDoViewModel'
],function(ko, MainToDoViewModel){
    'use strict';

    describe('ToDoListViewModel - ', function () {

        var toDoListViewModel = {};

        beforeEach(function () {
            toDoListViewModel = new MainToDoViewModel();
        });

        it('should add a new ToDo list', function () {
            toDoListViewModel.newListName('New List');
            toDoListViewModel.addNewToDoList();
            expect(toDoListViewModel.toDoLists().length).toBeGreaterThan(0);
        });

        it('should calculate rows properly - 1', function(){
            toDoListViewModel.newListName('New List');
            toDoListViewModel.addNewToDoList();
            expect(toDoListViewModel.toDoListRows().length).toEqual(1);
        });

        it('should calculate rows properly - 2', function(){
            toDoListViewModel.newListName('New List');
            toDoListViewModel.addNewToDoList();
            toDoListViewModel.newListName('New List');
            toDoListViewModel.addNewToDoList();
            toDoListViewModel.newListName('New List');
            toDoListViewModel.addNewToDoList();
            toDoListViewModel.newListName('New List');
            toDoListViewModel.addNewToDoList();
            expect(toDoListViewModel.toDoListRows().length).toEqual(2);
        });

        it('test should fail', function () {
            expect(true).toEqual(false);
        });

    });

});
