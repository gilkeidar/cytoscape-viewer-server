var hardCodedStyle = {
    "format_version" : "1.0",
    "generated_by" : "cytoscape-3.7.2",
    "target_cytoscapejs_version" : "~2.1",
    "title" : "Directed",
    "style" : [ {
      "selector" : "node",
      "css" : {
        "font-family" : "SansSerif.plain",
        "font-weight" : "normal",
        "height" : 45, //used to be 45.0
        "background-opacity" : 1.0,
        "border-color" : "rgb(145,145,145)",
        "text-valign" : "center",
        "text-halign" : "center",
        "font-size" : 12, //originally was 8
        "border-opacity" : 1.0,
        "color" : "blue", //"rgb(51,153,255)",
        "shape" : "roundrect", //used to be "oval"
        "text-opacity" : 1.0,
        "width" : 100, //used to be 45.0
        "border-width" : 2.0, //used to be 5.0
        "background-color" : "rgb(255,255,255)",
        "content" : "data(name)"
      }
    }, {
      "selector" : "node:selected",
      "css" : {
        "background-color" : "lightgreen" //"rgb(255,0,102)"
      }
    }, {
      "selector" : "edge",
      "css" : {
        "font-family" : "SansSerif.plain",
        "text-outline-color": "#000",
        "text-outline-width": 0.5,
        "text-valign": "top",
        "text-halign": "center",
        "font-weight" : "normal",
        "source-arrow-color" : "rgb(204,204,204)",
        "line-style" : "solid",
        "opacity" : 1.0,
        "text-opacity" : 1.0,
        "source-arrow-shape" : "none",
        "target-arrow-shape" : "triangle",
        "color" : "rgb(51,153,255)",
        "font-size" : 24,
        "line-color" : "rgb(204,204,204)",
        "target-arrow-color" : "rgb(204,204,204)",
        "width" : 5.0,
        "content" : "data(Weight)"
      }
    },
    // }, {
    //   "selector" : "edge[Weight > 66]",
    //   "css" : {
    //     "font-size" : 1
    //   }
    // }, {
    //   "selector" : "edge[Weight = 66]",
    //   "css" : {
    //     "font-size" : 30
    //   }
    // }, {
    //   "selector" : "edge[Weight > 0][Weight < 66]",
    //   "css" : {
    //     "font-size" : "mapData(Weight,0,66,10,30)"
    //   }
    // }, {
    //   "selector" : "edge[Weight = 0]",
    //   "css" : {
    //     "font-size" : 10
    //   }
    // }, {
    //   "selector" : "edge[Weight < 0]",
    //   "css" : {
    //     "font-size" : 1
    //   }
    // }, {
    //   "selector" : "edge[Weight > 66]",
    //   "css" : {
    //     "width" : 1.0
    //   }
    // }, {
    //   "selector" : "edge[Weight = 66]",
    //   "css" : {
    //     "width" : 8.536585365853659
    //   }
    // }, {
    //   "selector" : "edge[Weight > 0][Weight < 66]",
    //   "css" : {
    //     "width" : "mapData(Weight,0,66,1.4634146341463414,8.536585365853659)"
    //   }
    // }, {
    //   "selector" : "edge[Weight = 0]",
    //   "css" : {
    //     "width" : 1.4634146341463414
    //   }
    // }, {
    //   "selector" : "edge[Weight < 0]",
    //   "css" : {
    //     "width" : 1.0
    //   }
    // }, 
    {
      "selector" : "edge:selected",
      "css" : {
        "line-color" : "rgb(255,0,0)"
      }
    } ]
  }