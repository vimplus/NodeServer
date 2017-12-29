export default {
    data() {
        return {
            firstName: 'Michael'
        };
    },
    methods: {
        multiply(x, y) {
            return x * y;
        }
    }
};

var obj = {
    name: 'txboy'
}

var foo = {
    bar: 'xyz'
}

export {
    obj,
    foo
}
