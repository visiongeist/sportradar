export default class Lalala {

    constructor() {
        console.log('new lalala');
    }

    public concat(...args: string[]): string {
        return args.join(' ');
    }

}