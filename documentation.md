creation de de bare de recherge en angular
1.1-  on creer un service et on instecier laba
    private  stringSource = new BehaviorSubject(''); //BehavoirSubjet al fois observable et observatur
et aussi on peut l utiliser dans tout nos projet

   courentSearch = this.stringSource.asObservable();// courentSearch c' est lui qui v a prender le nuvelle 
chaine a recherge

et on creer une fonction qui va nous retouene le nouvelle chaine a recherge
changeValue(message: string): any {
this.stringSource.next(message);
}
1.2- Et on allez dans la headerComponent.ts ,on instentier le notre serchService et on mette sa

newMessage(search){ // se function se trouve dans la headerComponent.html
this.data.changeValue(search);
}
ngOnInit(): void {
this.data.courentSearch.subscribe(search => this.search = search);
}
1.3-pour le headerComponent.htm
<input type="text" class="m-3 h-400 w-115" name="search" [(ngModel)]="search" (keyup)="newMessage(search)"
placeholder="Recherger un bien">

