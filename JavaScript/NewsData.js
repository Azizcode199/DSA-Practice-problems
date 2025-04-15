class NewsData {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers() {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i].update();
      }
    }
  }
  