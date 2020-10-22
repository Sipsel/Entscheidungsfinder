class Node
{
    constructor(title, text)
    {
        this.title = title;
        this.text = text;
        this.nextnodes = [];
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
}