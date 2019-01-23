(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("There are two ways to use vuex-easy-firestore, in 'collection' or 'doc' mode. You can only choose one because this points to the path you sync your vuex module to:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Whether a vuex module is set to 'doc' or 'collection' mode, will have small changes in the actions you can do, but the syntax is mostly the same.")]),t._v(" "),t._m(7),t._v(" "),a("blockquote",[a("p",[t._v("If you still are confused how to set up your database structure when it comes to "),a("strong",[t._v("documents vs collections")]),t._v(", I highly recommend to check "),a("a",{attrs:{href:"https://firebase.google.com/docs/firestore/manage-data/structure-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide from Firebase"),a("OutboundLink")],1),t._v(" itself.")])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Example Vuex module:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),a("p",[t._v("In the above example you can see that you can delete a field (or property) by passing a string and separate sub-props with "),a("code",[t._v(".")]),t._v(" (See "),a("router-link",{attrs:{to:"./firestore-fields-and-functions.html#delete-fields"}},[t._v("here")]),t._v(" for more info on deleting fields)")],1),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("When working with collections, each document insert or update will automatically receive these fields:")]),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("You can disable these fields by adding them to your "),a("code",[t._v("guard")]),t._v(" config. See the "),a("router-link",{attrs:{to:"./extra-features.html#fillables-and-guard"}},[t._v("related documentation on guard")]),t._v(".")],1),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),a("p",[t._v("Every insert will automatically generate an ID and return a promise resolving in the ID of the doc added to the store and Firestore.")]),t._v(" "),a("p",[t._v("This is how you can use the auto-generated ID:")]),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),a("p",[t._v("Please note you can also access the ID (even if you don't manually pass it) in the "),a("router-link",{attrs:{to:"./hooks.html#hooks"}},[t._v("hooks")]),t._v(".")],1),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("In 'doc' mode all changes will take effect on the single document you have passed in the firestorePath.")]),t._v(" "),a("p",[t._v("You will be able to use these actions:")]),t._v(" "),t._m(38),a("p",[t._v("And yes, just like in 'collection' mode, you can pass a prop-name with sub-props like so:")]),t._v(" "),t._m(39),t._m(40),t._v(" "),a("p",[t._v("When working with a single doc, your document updates will automatically receive these fields:")]),t._v(" "),t._m(41),t._v(" "),a("p",[t._v("Just as with 'collection' mode, you can disable these fields by adding them to your "),a("code",[t._v("guard")]),t._v(" config. See the "),a("router-link",{attrs:{to:"./extra-features.html#fillables-and-guard"}},[t._v("related documentation on guard")]),t._v(".")],1),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),a("p",[t._v("In cases you don't want to loop through items you can also use the special batch actions below. The main difference is you will have separate hooks (see "),a("router-link",{attrs:{to:"./hooks.html#hooks"}},[t._v("hooks")]),t._v("), and batches are optimised to update the vuex store first for all changes and the syncs to firestore last.")],1),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),a("p",[t._v("You can duplicate a document really simply by dispatching 'duplicate' and passing the id of the target document.")]),t._v(" "),t._m(48),a("p",[t._v("This will create a copy of Bulbasaur (and all its props) with a random new ID. The duplicated doc will automatically be added to your vuex module and synced as well.")]),t._v(" "),a("p",[t._v("If you need to know which new ID was generated for the duplicate, you can retrieve it from the action:")]),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._v(" "),a("p",[t._v("This is how you duplicate a batch of documents:")]),t._v(" "),t._m(52),a("p",[t._v("This way you can use the result if you need to do extra things to your duplicated docs and you will know for each ID which new ID was used to make a duplication.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"add-and-manage-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-and-manage-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Add and manage data")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("With just 4 actions (set, patch, insert, delete) you can make changes to your vuex store and "),s("strong",[this._v("everything will automatically stay up to date with your firestore!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Collection mode")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("firestoreRefType: 'collection'")])]),this._v(" "),s("li",[s("code",[this._v("firestorePath")]),this._v(" should be a firestore collection")]),this._v(" "),s("li",[this._v("Use when working with multiple documents, all docs will automatically be retrieved and sync when making changes.\n"),s("br"),this._v('eg. when a user has multiple "items" like a to-do list')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Doc mode")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("firestoreRefType: 'doc'")])]),this._v(" "),s("li",[s("code",[this._v("firestorePath")]),this._v(" should be a single firestore document")]),this._v(" "),s("li",[this._v("Use when working with a single doc.\n"),s("br"),this._v('eg. the "settings" or "config" of a user.')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The sync is fully robust and "),s("strong",[this._v("automatically groups any api calls per 1000 ms")]),this._v(". You don't have to worry about optimising/limiting the api calls, it's all done automatically! (Only one api call per 1000ms will be made for a maximum of 500 changes, if there are more changes queued it will automatically be split over 2 api calls).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"collection-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collection-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" 'collection' mode")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In 'collection' mode, documents that are added to your module will be added in an object under the property you can choose with the "),s("code",[this._v("statePropName")]),this._v(" option.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myModule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  firestorePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'myDocs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  firestoreRefType"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'collection'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  moduleName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'myModule'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  statePropName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'data'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  namespaced"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// automatically added")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("With the setup above when documents are added they will appear in the state of the module "),s("code",[this._v("myModule")]),this._v(" under the prop called "),s("code",[this._v("data")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then with these 4 actions: set, patch, insert and delete, you can edit "),s("strong",[this._v("single docs")]),this._v(" of your collection. These actions make sure Firestore will stay in sync.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/set'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 'set' will choose to dispatch either `patch` OR `insert` automatically")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/patch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// doc needs an 'id' prop")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/insert'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/delete'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"insert-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Insert example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/set'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello Firestore 🔥'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/insert'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello Firestore 🔥'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("The object above has just one field: "),a("code",[t._v("title")])]),t._v(" "),a("li",[t._v("Since there is no "),a("code",[t._v("id")]),t._v(" field, the object will be "),a("strong",[t._v("inserted")]),t._v(" as new document")]),t._v(" "),a("li",[t._v("The document will "),a("strong",[t._v("automatically get a new ID")])]),t._v(" "),a("li",[t._v("The document will appear in Vuex like so:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('// in the module called "myModule"')]),t._v("\nstate"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'abc123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello Firestore 🔥'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abc123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("The document will also be inserted in Firestore at the firestorePath "),s("code",[this._v("myDocs")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"patch-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patch-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Patch example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you specify the "),s("code",[this._v("id")]),this._v(" you can modify any data of existing documents.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abc123'")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/set'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello Universe 💫 🛰'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/patch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello Universe 💫 🛰'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As you can see in the example above, with the "),s("code",[this._v("patch")]),this._v(" action (or "),s("code",[this._v("set")]),this._v(" with "),s("code",[this._v("id")]),this._v(" field) you can modify and/or add new fields.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can also patch "),s("strong",[this._v("nested fields")]),this._v(" like so:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/patch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("water"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Any other fields inside "),s("code",[this._v("tags")]),this._v(" will be left alone and only "),s("code",[this._v("water")]),this._v(" will be updated (or added as new prop).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"delete-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There are two ways to delete things: (1) the whole document or (2) "),s("strong",[this._v("just a field!")]),this._v(' (A field meaning "a property" of that document)')])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abc123'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Delete the whole document:")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/delete'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Delete a field of a document:")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'myModule/delete'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(".tags.water`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// the document looks like:")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abc123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fire"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    water"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// only `water` will be deleted in this example!")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"auto-generated-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-generated-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto-generated fields")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("created_at")]),t._v(" / "),a("code",[t._v("updated_at")]),t._v(" both use: "),a("code",[t._v("new Date()")])]),t._v(" "),a("li",[a("code",[t._v("created_by")]),t._v(" / "),a("code",[t._v("updated_by")]),t._v(" will automatically fill in the userId")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"manually-assigning-doc-ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-assigning-doc-ids","aria-hidden":"true"}},[this._v("#")]),this._v(" Manually assigning doc IDs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can, "),s("strong",[this._v("but do not need to")]),this._v(", assign doc IDs manually.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/insert'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newDoc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// returns id")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// mind the await!")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("When assigning ID's manually")]),this._v(" the recommended way to do so is:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// assign manually")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" getters"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/dbRef'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newDoc "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* and other fields */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/insert'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newDoc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As you can see in the example above, each vuex-easy-firestore module has a getter called "),s("code",[this._v("dbRef")]),this._v(" with the reference of your "),s("code",[this._v("firestorePath")]),this._v(". So when you add "),s("code",[this._v(".doc().id")]),this._v(' to that reference you will "create" a new ID, just how Firestore would do it. This way you can do whatever you want with the ID before / after the insert.')])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"doc-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doc-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" 'doc' mode")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/set'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my new name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// same as `patch`")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/patch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("status"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'awesome'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Only the props you pass will be updated.")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/delete'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'status'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// pass a prop-name")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Only the propName (string) you pass will be deleted")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/delete'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'settings.banned'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// the doc looks like:")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Satoshi'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  settings"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    showStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    banned"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// only `banned` will be deleted from the item!")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"auto-generated-fields-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-generated-fields-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto-generated fields")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("updated_at")]),this._v(" uses: "),s("code",[this._v("new Date()")])]),this._v(" "),s("li",[s("code",[this._v("updated_by")]),this._v(" will automatically fill in the userId")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"batch-updates-inserts-deletions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch-updates-inserts-deletions","aria-hidden":"true"}},[this._v("#")]),this._v(" Batch updates/inserts/deletions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Only for 'collection' mode.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/insertBatch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// pass an array of docs")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/patchBatch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ids"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// `doc` is an object with the fields to patch, `ids` is an array")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'moduleName/deleteBatch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ids"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// pass an array of ids")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("All batch actions will return a promise resolving to an array of the edited / added ids.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"duplicating-docs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duplicating-docs","aria-hidden":"true"}},[this._v("#")]),this._v(" Duplicating docs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Only for 'collection' mode.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// let's duplicate Bulbasaur who has the id '001'")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pokemonBox/duplicate'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'001'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" idMap "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pokemonBox/duplicate'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'001'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// mind the await!")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// idMap will look like this:")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'001'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dupeId"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// dupeId will be a string with the ID of the duplicate!")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the example above, if Bulbasaur ('001') was duplicated and the new document has random ID "),s("code",[this._v("'123abc'")]),this._v(" the "),s("code",[this._v("idMap")]),this._v(" will be "),s("code",[this._v("{'001': '123abc'}")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"duplicate-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-batch","aria-hidden":"true"}},[this._v("#")]),this._v(" Duplicate batch")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" idMap "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pokemonBox/duplicateBatch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'001'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'004'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'007'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// idMap will look like this:")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'001'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'some-random-new-ID-1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'004'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'some-random-new-ID-2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'007'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'some-random-new-ID-3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="add-and-manage-data.md";s.default=e.exports}}]);