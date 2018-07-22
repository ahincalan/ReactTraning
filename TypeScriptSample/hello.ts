
var Count : number = 12;
var items : Array<string> = [ "a", "b", "c","d"];

function listItems():string{
        var output:string="";

        for(var i:number =0;i<items.length;i++){
            output += items[i];
        }
        return output;
}
 

console.log(listItems());