const createState = (stateObj) => {
  return new Proxy(stateObj, {
    set(target, property, value) {
      target[property] = value;
      render();
      return true;
    },
  });
};

const state = createState({
  name: "",
  lastName: "",
  age: null,
});

/* Select each element having data-model selector */
const listeners = document.querySelectorAll("[data-model]");

listeners.forEach((element) => {
  const name = element.dataset.model;
  element.addEventListener("keyup", (event) => {
    /*new value will be assigned to name whenever keyup event will  be fired*/
    state[name] = element.value;
    console.log(state);
  });
});

const render = () => {
  const bindings = Array.from(document.querySelectorAll("[data-binding]")).map(
    (e) => e.dataset.binding
  );
  bindings.forEach((binding) => {
    document.querySelector(`[data-binding=${binding}]`).innerHTML =
      state[binding];
    document.querySelector(`[data-model=${binding}]`).value =
      state[binding];
  });
};

render();
