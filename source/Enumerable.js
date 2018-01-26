;(function () {

    var Enumerable = function (arry) {
        if (typeof arry === "undefined") return;
        for (var i = 0; i < arry.length; i++) this.push(arry[i]);
    };
    Enumerable.prototype = new Array();
    Enumerable.prototype.where = function (whereFn) {
        var tempArry = new Enumerable();
        for (var i = 0; i < this.length; i++){
            if (whereFn(this[i])===true) tempArry.push(this[i]);
        } 
        return tempArry;
    }
    Enumerable.prototype.select = function (selectFn) {
        var tempArry = new Enumerable();
        for (var i = 0; i < this.length; i++){
            tempArry.push(selectFn(this[i]));
        }
        return tempArry;
    }
    Enumerable.prototype.groupBy = function (groupFn) {
        
    }

    window.Enumerable = Enumerable;
})();