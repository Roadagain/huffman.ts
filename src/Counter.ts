export default class Counter {
    readonly count: Array<[string, number]>;

    constructor(str: string) {
        let map = new Map<string, number>();
        for (let c of str){
            //i hope setdefault to js map
            let currentCount = 0; // if the key isnt exist, count must be 0
            if (map.has(c)){
                // there is no worry about null: map has the key
                currentCount = map.get(c) as number;
            }
            map.set(c, currentCount + 1);
        }

        this.count = [...map].sort(); // count array is sorted by chars
    }
}
