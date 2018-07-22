class Organism {
    private Name: string = "Organism";
    public constructor(){

    }
    public SetName(name:string){
        this.Name = name;
    } 
    public GetOrganismName():string {
        return this.Name;
    }
}

export { 
    Organism
}