// 🧠 Übung 5:
// Die Klasse SensorData hat eine Liste observers.
// Du sollst 3 Methoden schreiben:

// addObserver(observer)

// removeObserver(observer)

// notifyObservers()

interface Observer {
    update(): void;
  }
  
  class SensorData {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    notifyObservers(): void {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i].update();
      }
    }
  }
  
      

