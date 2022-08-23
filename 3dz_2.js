function createDebounceFunction (callb, delay) {
    let timeout;

    return function (...args) {
      const contxt = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callb.apply(contxt, args), delay);
    };
  };

