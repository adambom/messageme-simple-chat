(function (App, undefined) {
App["tmpl"] = App["tmpl"] || {};
App["tmpl"]["message"] = App["tmpl"]["message"] || {};
App["tmpl"]["chatWindow"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>Messages:</h3>\n<div class="chat-window well"></div>\n<div class="input-area"></div>';

}
return __p
};
App["tmpl"]["emptyRoom"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="message"><p class="muted">No messages yet</p></div>';

}
return __p
};
App["tmpl"]["inputArea"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form>\n\t<div class="row-fluid">\n\t\t<div class="span11"><input ' +
((__t = ( rewinding ? 'disabled': '' )) == null ? '' : __t) +
' type="text" class="input-block-level input" placeholder="' +
((__t = ( rewinding ? 'Input disabled while rewinding': '' )) == null ? '' : __t) +
'"></div>\n\t\t<div class="span1"><button ' +
((__t = ( rewinding ? 'disabled': '' )) == null ? '' : __t) +
' type="submit" class="btn submit">Send</button></div>\n\t</div>\n</form>';

}
return __p
};
App["tmpl"]["loggedIn"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>You are signed in as ' +
((__t = ( user )) == null ? '' : __t) +
' <a class="logout" href="javascript: void(0);">log out</a></p>';

}
return __p
};
App["tmpl"]["login"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-signin">\n\t<h2 class="form-signin-heading">Please sign in</h2>\n\n\t<input type="text" class="input-block-level username" placeholder="Username">\n\n\t<label class="checkbox">\n\t\t<input type="checkbox" value="remember-me" class="remember"> Remember me\n\t</label>\n\n\t<button class="btn btn-large btn-primary" type="submit">Sign in</button>\n</form>';

}
return __p
};
App["tmpl"]["message"]["messageNew"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<blockquote>\n\t<small>' +
((__t = ( _.escape(user.name) || 'You' )) == null ? '' : __t) +
' said:</small>\n\t<p>' +
((__t = ( parsedBody )) == null ? '' : __t) +
'</p>\n</blockquote>\n';

}
return __p
};
App["tmpl"]["message"]["roomJoin"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="muted">' +
((__t = ( _.escape(user.name) )) == null ? '' : __t) +
' has logged in</p>\n';

}
return __p
};
App["tmpl"]["message"]["userLeave"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="muted">' +
((__t = ( _.escape(user.name) )) == null ? '' : __t) +
' has left the room</p>\n';

}
return __p
};
App["tmpl"]["message"]["userLogin"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="muted">You have joined the room as ' +
((__t = ( _.escape(user.name) )) == null ? '' : __t) +
'</p>\n';

}
return __p
};
App["tmpl"]["rewind"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" class="dropdown-toggle" data-toggle="dropdown">\n\tRewind Chat\n\t<b class="caret"></b>\n</a>\n<ul class="dropdown-menu row">\n\t<li class="span12">\n\t\t';
 if (totalMessages > 1) { ;
__p += '\n\t\t\t<input type="text" class="slider span12" data-slider-step="1" data-slider-min="0" data-slider-tooltip="show">\n\t\t';
 } else if (totalMessages === 1) { ;
__p += '\n\t\t\t<span class="muted">You only have 1 message.</span>\n\t\t';
 } else { ;
__p += '\n\t\t\t<span class="muted">No messages yet.</span>\n\t\t';
 } ;
__p += '\n\t</li>\n</ul>\n';

}
return __p
};
App["tmpl"]["room"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="span8 chat"></div>\n<div class="span4 user-management"></div>';

}
return __p
};
App["tmpl"]["userManagement"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="users-list"></div>\n<div class="join-room"></div>';

}
return __p
};
App["tmpl"]["user"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="user">' +
((__t = ( name )) == null ? '' : __t) +
'</li>';

}
return __p
};
App["tmpl"]["usersList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>Users in room:</h3>\n\n<ul class="users unstyled">\n\t<li class="muted unstyled">No users yet</li>\n</ul>\n\n<div class="you"></div>';

}
return __p
};
})( this["SC"]);