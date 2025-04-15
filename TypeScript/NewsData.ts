// 🧠 Exercise 4:
// The NewsData class stores a list of observers.
// You should write two methods:

// addObserver(observer) → adds a new observer to the list.

// notifyObservers() → calls update() for all observers.

interface Observer {
    update(): void;
  }
  
  class NewsData {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    notifyObservers(): void {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i].update();
      }
    }
  }
  