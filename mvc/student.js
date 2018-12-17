// Schrijf hier je code
function onMouseDown(count, args) {
    return count + 1;
}

function onMouseDown2(state, args) {
    return { count: state.count + 1 };
}
function counter3() {
    function onMouseDown(state, args){
      return { count: state.count + 1 };
    }

    return { controller: { onMouseDown } };
}

function counter4() {
    function onMouseDown(state, args){
      return { count: state.count + 1 };
    }

    function onKeyDown({ count }, args) {
      return { count: 0 };
    }
    return { controller: { onMouseDown, onKeyDown } };

}

function counter5() {
  function onMouseDown(state, args){
    if(onKeyDown == true){
      return { count: state.count - 1 };
    }
    return { count: state.count + 1 };
  }
  function onKeyDown({ count }, args) {
    if(args.shift){
      return true;
    }
  }

  return { controller: { onMouseDown, onKeyDown }};
}
