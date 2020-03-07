var networkObject;
for (var firstKey in networks) {
  networkObject = firstKey;
}
console.log(networkObject);
console.log(networks[networkObject]); //for some odd reason networks[0] doesn't work
var cy = cytoscape({
  container: document.getElementById("cy"),
  elements: networks[networkObject].elements,
  style: styles[0].style, //hardCodedStyle, //styles[i].style
  layout: {
    name: "preset",
    fit: true
  }
});

console.log("style:", cy._private); //!!!!!!!find where the style property is stored!!!!!!!
// var testDiv = document.getElementById("test");
// console.log("testDiv",testDiv);

//Capabilities here:

//select a node and its neighbors:
fetch("/getItem", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json; odata=verbose"
  }
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("data:", data);
    var item = data[0];
    console.log("item:", item);
    // testDiv.innerHTML = item;

    if(item)
    {
        var itemCy = cy.$(`node[name=${item}]`)[0];
        console.log("itemCy:", itemCy)
        console.log(itemCy._private.data.name)
        // testDiv.innerHTML += `</br>${itemCy._private.data.name}`;

        itemCy.select(); //select item
        itemCy.style({ backgroundColor : "yellow", "z-index": 10}) //changes item's color and puts it at the front
        
        var itemPosition = itemCy.position();

        cy.$("node:selected").neighborhood().select(); //select item's neighborhood nodes and edges
        cy.$(":unselected").style({ opacity: 0 }); //hiding unselected nodes and edges

        var selectedElements = cy.$(":selected");

        if(selectedElements.length > 1)
        {
            selectedElements.layout({ //layout to show selected node in the middle with neighbor nodes around it in a circle
                name: "concentric",
                fit: true,
                padding: 0,
                boundingBox: {
                  x1: itemPosition.x - 1,
                  x2: itemPosition.x + 1,
                  y1: itemPosition.y - 1,
                  y2: itemPosition.y + 1
                },
                avoidOverlap: true,
                concentric: function(ele) {
                  if (ele.same(itemCy)) {
                    return 2;
                  } else {
                    return 1;
                  }
                },
                levelWidth: function() {
                  return 1;
                },
                boxSelectionEnabled: true,
                pannable: true
              }).run();
        }

        cy.fit(cy.$(":selected"), 0);
    }
    

 }
  );
