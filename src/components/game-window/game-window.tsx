import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'game-window',
  styleUrl: 'game-window.css',
})
export class GameWindow {
  @State() dicePool: number = 0;
  @State() rolledDice: number[] = [];
  @State() loot: number[] = [];

  @State() turn: number = 0;

  /**
   * Function that initialises the game state
   */
  private startGame = () => {
    this.dicePool = 5;
    this.rolledDice = [];
    this.loot = [];
    this.rollDice();
    this.turn = 1;
  };
  
  private reset = () => {
    this.startGame();
  };

  private rollDice() {
    this.rolledDice = [];
    for (let i = 0; i <= this.dicePool; i++) {
      this.rolledDice.push(Math.ceil(Math.random() * 6));
    }
  }

  private addDice = (value: number, index: number) => {
    this.loot.push(value);
    this.rolledDice.splice(index, 1);
    this.dicePool = this.dicePool - 1;
  };

  private removeDice = (value: number, index: number) => {
    this.loot.splice(index, 1);
    this.rolledDice.splice(index, 0, value);
    this.dicePool = this.dicePool + 1;
  };

  render() {
    if (this.turn === 0) {
      return (
        <button
          class="start-button"
          onClick={() => {
            this.startGame();
          }}
        >
          Start Game
        </button>
      );
    } else {
      return (
        <div class="screen">
          Pool
          <div class="dice-pool">
            {this.rolledDice.map((diceValue: number, index: number) => {
              return <roll-dice key={index} onClick={() => this.addDice(diceValue, index)} value={diceValue} />;
            })}
          </div>
          Loot
          <div class="dice-pool">
            {this.loot.map((diceValue: number, index: number) => {
              return <roll-dice key={index} onClick={() => this.removeDice(diceValue, index)} value={diceValue} />;
            })}
          </div>
          <div>
            <button class="start-button" onClick={() => this.reset()}>
              Reset
            </button>
            <button class="start-button start-button--roll" onClick={() => this.rollDice()}>
              Roll
            </button>
          </div>
        </div>
      );
    }
  }
}
