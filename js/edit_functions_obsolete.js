function createTree(nodes)
{
    let tree = document.getElementById("trees")
    let ul = document.createElement("ul")
    ul.appendChild(construct_tree(nodes))
    tree.appendChild(ul)

}
function construct_tree(nodes)
{
    let obj_count = nodes.length
    let i = 0;
    let result; 
    let li = document.createElement("li")
    while(i<obj_count)
    {
        
        let li_inside = document.createElement("li")
        let ul = document.createElement("ul")
        let link = document.createElement("button")

        let left_button = document.createElement("button")
        let right_button = document.createElement("button")
        let title = document.createElement("h1")
        let text = document.createElement("p")

        title.innerHTML =   nodes[i].title
        text.innerHTML  =   nodes[i].text.slice(0,40)

       
        link.appendChild(title)
        link.appendChild(text)
        link.id = nodes[i].id

        li_inside.appendChild(link);
        ul.appendChild(construct_tree(nodes[i].nextnodes))
        console.log(ul.innerHTML)
        console.log(ul.innerHTML)
        li_inside.appendChild(ul)
        
        li.appendChild(li_inside)
        

        //console.log(nodes[i].id == node_id,result)
        //console.log(nodes[i])
        //find_parent_node(nodes[elem],node)
        //createTree(nodes[i].nextnodes);


        
        if(i>obj_count)
        {
            return li;
        }
        i++;
    }

    return li
}