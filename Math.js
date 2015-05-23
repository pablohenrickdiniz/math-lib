Math.dot = function dot(x, y) { //dot product
    return x.reduce(function (p, c, i) {
        return p + x[i] * y[i];
    }, 0);
};

Math.norm = function (x) { //2-norm of a vector
    return Math.sqrt(Math.dot(x, x));
};

Math.vpv = function (x, y) { //element-wise addition
    return x.map(function (xElem, i) {
        return xElem + y[i];
    });
};

Math.vmv = function (x, y) { //element-wise subtraction
    return x.map(function (xElem, i) {
        return xElem - y[i];
    });
};

Math.med = function (va, vb) {
    return Math.vpv(va, vb).map(function (xElem) {
        return xElem / va.length;
    });
};

Math.parse_degree = function (radians) {
    return radians * (180 / Math.PI);
};

Math.parse_radians = function (degree) {
    return degree / (180 / Math.PI);
};


Math.get_degree = function (a, b) {
    return Math.parse_degree(Math.acos(Math.dot(a, b) / (Math.norm(a) * Math.norm(b))));
};


Math.get_clock_degree = function (origin, p) {
    var va = [0, -1];
    var vb = [p[0] - origin[0], p[1] - origin[1]];
    var degree = Math.get_degree(va, vb);
    return vb[0] < 0 ? 360 - degree : degree;
};

Math.distance = function (pa, pb) {
    return Math.sqrt(Math.pow(pa[0] - pb[0], 2) + Math.pow(pa[1] - pb[1], 2));
};
