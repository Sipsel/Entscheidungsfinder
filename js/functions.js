function main()
{
    node_start = new Node("","");
    node_one = new Node("Aquistion of a new System","Adding an Application to the existing Product")
    node_two = new Node("Security Issue","A security incident has occured and you want to report")
    node_three = new Node("Inventorying new Application","You have succesfully added an application and want to inventory the change")
    // naming convention for the nodes
    node_start.add_node(node_one);
    node_start.add_node(node_two);
    nodes = [node_one,node_two,node_three]
    show_nodes(nodes);
}

function show_nodes(nodes) {
    let question = document.getElementById("questions")
    console.log(nodes.length)
    for(i = 0; i<nodes.length;i++)
    {
        let top_div = document.createElement("div")
        let content_div = document.createElement("div")
        let title = document.createElement("h3")
        let text = document.createElement("p")
        let arrow_div = document.createElement("div")
        let arrow_span = document.createElement("span")


        top_div.classList.add("question")
        top_div.classList.add("btn")

        title.innerHTML = nodes[i].node_title;
        text.innerHTML = nodes[i].node_text;
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