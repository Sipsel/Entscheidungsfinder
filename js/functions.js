function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function main()
{
    /*
    ciso = new Node("CISO","",0,null)
    po = new Node("Product Owner","",1,null)
    pm = new Node("Product Manager","",2,null)
    ao = new Node("Application Owner","",3,null)
    so = new Node("Security Operations","",4,null)
    ciso_list_repos = new Node("List all Repositories","You forgot where all repositories are stored? Click here!",5,1)
    ciso_list_repos_test = new Node("test","test",6,5)
    so_test = new Node("ada","dadaa",7,4)
    so_test_test = new Node("ada","adas",8,7)
    ciso.add_node(ciso_list_repos)
    ciso_list_repos.add_node(ciso_list_repos_test)
    so.add_node(so_test)
    
    naming convention for the nodes
    num_nodes = 0

    nodes = [ciso,po,pm,ao,so]
    
    show_nodes(nodes);
    */
    nodet = new Node_tree(node_data);
    nodet.contruct_tree();
    nodet.display()
    //console.log(find_node(nodet.nodes,6))
}
function find_parent_node(nodes,node)
{
    let obj_count = nodes.length
    let i = 0;
    let result; 
    while(i<obj_count)
    {
        //console.log(result)
        //console.log([nodes[i]],i,nodes[i].id == node.parent_node)
        if(nodes[i].id == node.parent_node)
        {
            result = nodes[i];
            return result;
        }
        //find_parent_node(nodes[elem],node)
        result = find_parent_node(nodes[i].nextnodes,node);

        i++;

        if(i>obj_count)
        {
            return null;
        }
        else if(result != undefined)
        {
            return result
        }
    }
    return result
    //return true
}
function find_node(nodes, node_id)
{
    let obj_count = nodes.length
    let i = 0;
    let result; 
    while(i<obj_count)
    {
        //console.log(result)
        //console.log(nodes[i].id == node_id,result)

        if(nodes[i].id == node_id)
        {
            result = nodes[i];
            return result;
        }
        //find_parent_node(nodes[elem],node)
        result = find_node(nodes[i].nextnodes,node_id);
        
        i++;

        if(i>obj_count)
        {
            return;
        }
        else if(result != undefined)
        {
            return result
        }
    }
    return result
}

//json in ein array packen
function parseJSON(node_data,arr)
{
    arr = []
    for(elem in node_data)
    {
        let node = node_data[elem]
        //console.log(node)
        arr.push(
            new Node(node.title,node.text,node.id,node.parent_node)
        )
    }
    return arr
}


function question_press(elem)
{
    let node_tree = nodet
    let node = find_node(node_tree.nodes,elem.id)
    let h_title = document.getElementById("main-title")
    h_title.innerHTML = `${h_title.innerHTML} > ${node.node_title}` 
    show_nodes(node.nextnodes)

}
async function show_nodes(nodes) {
    
    let question = document.getElementById("questions")
    if(question.children.length > 0)
    {
        for(var i = question.children.length-1; i>=0;i--)
        {
            console.log("removed" + question.children[i] + i + '<br>')
            question.children[i].classList.add("fadeout")
            await sleep(500);
            question.children[i].remove()
        }
    }
    // hier habe ich versucht wie in python mit einem dictonary zu arbeiten, das sollte uns später einiges an arbeit erleichtern
    // 25.10.2020 neue Entwicklung dictonaries machen alles nur noch schlimmer also back zu arrays :)
    for(var key in nodes) 
    {
        let top_div = document.createElement("div")
        let content_div = document.createElement("div")
        let title = document.createElement("h2")
        let text = document.createElement("p")
        let arrow_div = document.createElement("div")
        let arrow_span = document.createElement("span")


        top_div.classList.add("question")
        top_div.classList.add("btn")
        
        top_div.id = nodes[key].id;
        top_div.onclick = function(){question_press(this)}
        title.innerHTML = nodes[key].node_title;
        text.innerHTML = nodes[key].node_text;
        arrow_span.innerHTML = "&rarr;";
        arrow_span.classList.add("arrow");

        question.appendChild(top_div);
        top_div.appendChild(content_div);
        top_div.appendChild(arrow_div)
        content_div.appendChild(title)
        content_div.appendChild(text)
        arrow_div.appendChild(arrow_span)
    }
}