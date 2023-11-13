// Interfaz para los estados
interface State {
    press_play(): void;
    press_pause(): void;
    press_stop(): void;
  }
  
  // Estado concreto 1: Reproduciendo
  class PlayingState implements State {
    press_play(): void {
      console.log("La canción ya se está reproduciendo.");
    }
  
    press_pause(): void {
      console.log("Pausando la canción.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  
    press_stop(): void {
      console.log("Deteniendo la reproducción.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  }
  
  // Estado concreto 2: Pausado
  class PausedState implements State {
    press_play(): void {
      console.log("Reanudando la reproducción.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  
    press_pause(): void {
      console.log("La canción ya está en pausa.");
    }
  
    press_stop(): void {
      console.log("Deteniendo la reproducción.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  }
  
  // Estado concreto 3: Detenido
  class StoppedState implements State {
    press_play(): void {
      console.log("Iniciando la reproducción.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  
    press_pause(): void {
      console.log("La canción está detenida, no se puede pausar.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  
    press_stop(): void {
      console.log("La reproducción ya está detenida.");
      // No deberíamos retornar un nuevo estado aquí, ya que la interfaz State no lo especifica
    }
  }
  
  // Contexto que utiliza el patrón State
  class MusicPlayer {
    private state: State;
  
    constructor() {
      this.state = new StoppedState();  // Estado inicial
    }
  
    change_state(new_state: State): void {
      this.state = new_state;
    }
  
    press_play(): void {
      this.state.press_play();
    }
  
    press_pause(): void {
      this.state.press_pause();
    }
  
    press_stop(): void {
      this.state.press_stop();
    }
  }
  
  // Uso del patrón State
  const player = new MusicPlayer();
  
  // Reproducción
  player.press_play();
  
  // Pausa
  player.press_pause();
  
  // Intentar pausar nuevamente
  player.press_pause();
  
  // Detener
  player.press_stop();
  
  // Intentar detener nuevamente
  player.press_stop();
  
  // Iniciar nuevamente
  player.press_play();
  