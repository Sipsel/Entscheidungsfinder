class Node_tree
{
    constructor(node_data)
    {
        this.nodes = parseJSON(node_data)
    }
    add_node(node)
    {
        /*  @tom1903
            Node zum Baum hinzufügen
            
        */
    }
    contruct_tree()
    {
        let nodes = this.nodes
        var temp_tree = []
        if(nodes == [])
        {
            return false;
        }
        else
        {
            /*1 array sortieren
                gruesse an https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
            */
           nodes.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); // sorts the data by id
            
            
            // nodes hinzufuegen
            // 2.1 baum nach schon vorhandenen nodes, also ob es die parentnode schon im baum gibt -> am besten rekursiv #nice challenge bro
            for(elem in nodes)
            {
                let p_node = find_node(temp_tree,nodes[elem].parent_node)

                //console.log([p_node == undefined,p_node])
                if(p_node == undefined)
                {
                    temp_tree.push(nodes[elem])
                }
                else
                {
                    p_node.add_node(nodes[elem])
                }
            }
            this.nodes = temp_tree
            // 2.1.1 gibt es schon -> hinzufuegen
            // 2.1.2 gibt es noch nicht -> auf neuen ebene hinzufuegen
        }
        
        
    }
    add_to_dom(){
        show_nodes(this.nodes)
        let tree = document.getElementById("tree")
        let ul = document.createElement("ul")
        ul.appendChild(construct_tree(this.nodes))
        tree.appendChild(ul)
    }
    show_tree()
    {
        this.hide_menu()
        let tree = document.getElementById("tree")
        tree.classList.remove("hidden")
        tree.classList.add("shown")
    }
    hide_tree() {
        let tree = document.getElementById("tree");
        tree.classList.remove("shown");
        tree.classList.add("hidden");
    }
    show_menu()
    {
        this.hide_tree();
        let menu = document.getElementById("main-wrapper")
        menu.classList.remove("hidden")
        menu.classList.add("show")
        //
    }
    hide_menu()
    {
        let menu = document.getElementById("main-wrapper")
        menu.classList.remove("shown")
        menu.classList.add("hidden")
    }

    
}
class Node
{
    
    constructor(title, text,id, parent_node)
    {
        this.title = title;
        this.text = text;
        this.nextnodes = [];
        this.id = id
        this.parent_node = parent_node;
    }
    get_nextnodes(node_nr)
    {
        if(node_nr > this.nextnodes.length)
        {
            return
        }else
        {
            return this.nextnodes[node_nr]
        }
    }
    get node_title()
    {
        return this.title
    }
    get node_text()
    {
        return this.text
    }
    add_node(node) {
        this.nextnodes.push(node)
    }
    childnode(num)
    {
        return this.nextnodes[num]
    }
}