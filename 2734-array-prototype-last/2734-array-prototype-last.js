Array.prototype.last = function() {
    let end = this.length - 1;
    if(this.length === 0){
        return -1;
    }else{
        return this[end]
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */