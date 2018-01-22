export default class Counter {
    private map: Map<string, number>;

    constructor(str: string) {
        this.map = new Map<string, number>();
        for (let c of str){
            //i hope setdefault to js map
            let currentCount = 0; // if the key isnt exist, count must be 0
            if (this.map.has(c)){
                // there is no worry about null: map has the key
                currentCount = this.map.get(c) as number;
            }
            this.map.set(c, currentCount + 1);
        }
    }
}
