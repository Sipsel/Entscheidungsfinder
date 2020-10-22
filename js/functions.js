function main()
{
    node_one = new Node("Aquistion of a new System","Adding an Application to the existing Product",1)
    node_two = new Node("Security Issue","A security incident has occured and you want to report",2)
    node_three = new Node("Inventorying new Application","You have succesfully added an application and want to inventory the change",3)
    node_one_one = new Node("Developing new application","Instead of using third party software you want to develop your own",4)
    node_one_two = new Node("Adding third party software","You want to use third party software to enchance the prodcut",5)
    // naming convention for the nodes
    node_one.add_node(node_one_one)
    node_one.add_node(node_one_two)
    nodes = {
        1:node_one,
        2:node_two,
        3:node_three,
    }
    show_nodes(nodes);
}
function question_press(param)
{
    let node = nodes[param.id]
    nodes = {}
    nodes = node.nextnodes
    show_nodes(nodes)
}
function show_nodes(nodes) {
    
    let question = document.getElementById("questions")
    if(question.children.length > 0)
    {
        for(var i = question.children.length-1; i>=0;i--)
        {
            console.log("removed" + question.children[i] + i + '<br>')
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