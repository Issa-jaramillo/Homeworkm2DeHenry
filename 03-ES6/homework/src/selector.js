var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  //funcion recursiva para recorrer el arbol del dom
  function traverse(element){
  //comprobar si el elemento actual coincide con las condicionesespecificadas por matcFunc
  if(matchFunc(element)) {
    resultSet.push(element);
  }


  //recorrer los hijos del element actual
  for (let i = 0; i < element.children.length; i++) {
   traverse(element.children[i]);
    
  }
  }

  //iniciar el recorrido desde el elemento inicial 
  traverse(startEl);
  //devolver el conjunto de elementos que cumplen con las condiciones
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#"){
    return "id";

  } else if(selector[0] === "."){
    return "class"
  } else if(selector.includes(".") ){
    return "tag.class"
  } else{
    return "tag";
  }

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (element) {
      return element.id === selector.slice(1);
    };
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      return element.classList.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    var [tag, className] = selector.split(".");
    matchFunction = function (element) {
      return (
        element.tagName.toLowerCase() === tag.toLowerCase() &&
        element.classList.contains(className)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector.toLowerCase();
    };
  }

  return matchFunction;
};




var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
