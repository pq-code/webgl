import * as _ from 'lodash';
const firstArray = [{ path: '/firstScreen/home' }, { path: '/firstScreen/square' }];
let index;
const firstScreenFn = (to: any, from: any, next: any) => {
    index = _.random(0, 1);
    if (to.path == '/') {
        console.log(firstArray[index].path);
        debugger;
        next(firstArray[index].path);
    }
};

export default firstScreenFn;
