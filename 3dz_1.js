Array.prototype.myFilter = function (callb, thisArg) {
    if (this == null) {
      throw new Error("can't iterate");
    }

    if (typeof callb !== "function") {
      throw new Error("callback is not a function");
    }

    let contxt = this;
  
    const ObjFromArr = Object(this);
  
    if (arguments.length > 1) {
      contxt = thisArg;
    }
  
    const res = [];
    const callbf = callb.call(contxt, contxt[i], i, ObjFromArr);
  
    for (let i = 0; i < ObjFromArr.length; i++) {
      if (i in ObjFromArr) {
        if (callbf) {
          res.push(contxt[i]);
        }
      }
    }

    return res;
  };