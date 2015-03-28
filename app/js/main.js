/**
 * Created by bogdanbegovic on 9/19/14.
 */

require.config({
    baseUrl:'../bower_components',
    paths: {
        knockout: 'knockout/dist/knockout',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        jquery: 'jquery/dist/jquery.min',
        mainToDoViewModel: '../app/js/mainToDoViewModel',
        toDoList: '../app/js/toDoList',
        toDoListItem: '../app/js/toDoListItem'
    }
});

require(['knockout', 'mainToDoViewModel'], function(ko, MainToDoViewModel) {
    'use strict';

    ko.bindingHandlers.enterkey = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var allBindings = allBindingsAccessor();
            $(element).keypress(function (event) {
                var keyCode = (event.which ? event.which : event.keyCode);
                if (keyCode === 13) {
                    allBindings.enterkey.call(viewModel);
                    return false;
                }
                return true;
            });
        }
    };

    $(function () {
        ko.applyBindings(new MainToDoViewModel(), $('.todo-container')[0]);
    });

});
