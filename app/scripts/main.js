"use strict";

Parse.initialize("0FTXKt2fYCncn4C0exjIdr7k28dn2LBAOCnBJF4s", "5GJK8nJk0gixdJfmv6J68yCfRff44Mr8t7O6MwcE");

var Post = Parse.Object.extend('Post');

var User = Parse.Object.extend('User');

var PostColl  = Parse.Collection.extend({
	model: Post
});

var UserColl  = Parse.Collection.extend({
	model: User
});