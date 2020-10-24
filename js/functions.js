function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function main()
{
    ciso = new Node("CISO","",0,null)
    po = new Node("Product Owner","",1,null)
    pm = new Node("Product Manager","",2,null)
    ao = new Node("Application Owner","",3,0)
    so = new Node("Security Operations","",4,0)
    ciso_list_repos = new Node("List all Repositories","You forgot where all repositories are stored? Click here!",5,1)
    ciso.add_node(ciso_list_repos)
    // naming convention for the nodes
    num_nodes = 0
    nodes = {
        0:{
            0:ciso,
            1:po,
            2:pm,
            3:ao,
            4:so
        },
        
    }
    show_nodes(nodes[num_nodes]);

}

function goto_node(param) 
{
    /*
    param sollte die form t-xy haben
    x = eben
    y = fragen auf ebene
    t-xy
    0123
 */   
    
    let ebene = param.id[2]         // getting x
    num_nodes = ebene
    let ebene_frage = param.id[3]   //getting y
    let h_title = document.getElementById("main-title");
    //console.log([ebene,ebene_frage]);
    //console.log([typeof(nodes[ebene][ebene_frage].get_title),nodes[ebene][ebene_frage].get_title])
    if(typeof(nodes[ebene][ebene_frage].get_title) == "undefined")
    {
        h_title.innerHTML = "What is your Role?"
    }else
    {
        h_title.innerHTML = nodes[ebene][ebene_frage].get_title;
    }
    show_nodes(nodes[ebene])
}
function question_press(param)
{
    let node = nodes[num_nodes][param.id]
    //console.log(param)
    //console.log(node)
    let h_title = document.getElementById("main-title")
    h_title.innerHTML = `${h_title.innerHTML} > ${node.node_title}` 

    num_nodes++;
    nodes[num_nodes] = node.nextnodes
    show_nodes(nodes[num_nodes])
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