"use strict";
exports.__esModule = true;
var _ = require("lodash");
function show(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = function () {
        var res = _.words(reader.result, /[-а-яё]{4,}/gim);
        var result = _.flow([
            _.countBy,
            _.toPairs,
            _.partial(_.orderBy, _, 1, 'desc'),
            _.partial(_.take, _, 10),
        ]);
        var txt = result(res).map(function (_a) {
            var word = _a[0], num = _a[1];
            return "<tr><td>" + word + "<td>" + num;
        }).join('');
        var out = document.getElementById('out');
        out.insertAdjacentHTML('beforeend', txt);
    };
}
console.log(show('show is working'));
