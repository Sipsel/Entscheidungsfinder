function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function main()
{
    node_one = new Node("Aquistion of a new System","Adding an Application to the existing Product",0)
    node_two = new Node("Security Issue","A security incident has occured and you want to report",1)
    node_three = new Node("Inventorying new Application","You have succesfully added an application and want to inventory the change",2)
    node_one_one = new Node("Developing new application","Instead of using third party software you want to develop your own",3)
    node_one_two = new Node("Adding third party software","You want to use third party software to enchance the prodcut",4)
    // naming convention for the nodes
    node_one.add_node(node_one_one)
    node_one.add_node(node_one_two)
    num_nodes = 0
    nodes = {
        0:{
            0:node_one,
            1:node_two,
            2:node_three,
        },
        
    }
    show_nodes(nodes[num_nodes]);

}
/*
function goto_node(param) 
{
     param sollte die form t-xy haben
    x = eben
    y = fragen auf ebene
    t-xy
    0123
    
    
    let ebene = param.id[2]         // getting x
    let ebene_frage = param.id[3]   //getting y
    let h_title = document.getElementById("main-title")
    h_title.innerHTML = nodes[ebene][ebene_frage].get_title
    show_nodes(nodes[ebene])
}*/
function question_press(param)
{
    let node = nodes[num_nodes][param.id]
    console.log(node)
    let h_title = document.getElementById("main-title")
    h_title.innerHTML = h_title.innerHTML + " > " + node.node_title
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
            await sleep(750);
            question.children[i].remove()
        }

    }
    // hier habe ich versucht wie in python mit einem dictonary zu arbeiten, das sollte uns später einiges an arbeit erleichtern
    for(var key in nodes) 
    {
        let top_div = document.createElement("div")
        let content_div = document.createElement("div")
        let title = document.createElement("h3")
        let text = document.createElement("p")
        let arrow_div = document.createElement("div")
        let arrow_span = document.createElement("span")


        top_div.classList.add("question")
        top_div.classList.add("btn")
        
        top_div.id = nodes[key].id;
        top_div.onclick = function(){question_press(this)}
        title.innerHTML = nodes[key].node_title;
        text.innerHTML = nodes[key].node_text;
        arrow_span.innerHTML = "->";
        arrow_span.classList.add("arrow");

        question.appendChild(top_div);
        top_div.appendChild(content_div);
        top_div.appendChild(arrow_div)
        content_div.appendChild(title)
        content_div.appendChild(text)
        arrow_div.appendChild(arrow_span)
    }
}