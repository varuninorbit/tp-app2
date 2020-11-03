/*******************************
 * Purpose of this class is to give shape to app state.
 * 
 * An app state is made up of substates in a tree like 
 * structure. This shape is fixed not dynamic. 
 * 
 * So a basic structre can be given. Sate is in the form of
 * github.com/joaonuno/tree-model-js* 
 * 
 * 
 * */
import { Injectable } from '@angular/core';
import { GlobalService } from './_services';

@Injectable({
    providedIn: 'root'
})
export class RootStateService {
    root: any;

    constructor(private gs: GlobalService) {
        window['rootStateService'] = this;
        this.treeInit();
    }

    treeInit() {
        this.root = this.gs.tree.parse(this.structure)
    }

    get structure() {
        return {
            name: 'app',
            user: {},
            children: [
                {
                    name: 'examChoice',
                    children: [
                        { name:'mcqChapcil'}
                    ]
                }
            ]
        };
    }

    get allChildrenName(){
        return this.root.all().map(node=>node.model.name);
    }

    getNodesOfName(name){
        return this.root.all(node=>node.model.name==name);
    }
}

