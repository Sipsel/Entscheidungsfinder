//main ala C
function main()
{
    nodet = new Node_tree(node_data);
    nodet.contruct_tree();
    nodet.display()
    return true
}
//graphical functions

//wenn ein button/antwort gedrückt wird, werden leiste und fragen geupdatet
function question_press(elem)
{
    let node_tree = nodet
    let node = find_node(node_tree.nodes,elem.id)
    let h_title = document.getElementById("main-title")
    h_title.innerHTML = `${h_title.innerHTML} > ${node.node_title}` 
    show_nodes(node.nextnodes)
    return true
}
//anzeigen von fragen, die in in einem node array weitergegeben werden
async function show_nodes(nodes) {
    
    let question = document.getElementById("questions")

    await cleanup_questions();
    /*  hier habe ich versucht wie in python mit einem dictonary zu arbeiten, das sollte uns später einiges an arbeit erleichtern
        25.10.2020 neue Entwicklung dictonaries machen alles nur noch schlimmer also back zu arrays :)
        heir 
    */
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
        arrow_div.style.display = 'grid'

        question.appendChild(top_div);
        top_div.appendChild(content_div);
        top_div.appendChild(arrow_div)
        content_div.appendChild(title)
        content_div.appendChild(text)
        arrow_div.appendChild(arrow_span)
    }

    async function cleanup_questions() {
        if (question.children.length > 0) {
            for (var i = question.children.length - 1; i >= 0; i--) {
                console.log("removed" + question.children[i] + i + '<br>');
                question.children[i].classList.add("fadeout");
                await sleep(500);
                question.children[i].remove();
            }
        }
    }
    return true
}
//Helper functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

//Depth-first search ala @Sipsel
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
        if(i>obj_count)
        {
            return;
        }
        else if(result != undefined)
        {
            return result
        }

        i++;
    }
    return result
}