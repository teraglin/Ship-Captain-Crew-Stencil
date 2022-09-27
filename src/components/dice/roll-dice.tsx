import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'roll-dice',
  styleUrl: 'roll-dice.css',
})
export class RollDice {
  /**
   * The value of the dice
   */
  @Prop() value: number;

  /**
   * Function that determines the hover text for certain dice
   */
  private renderText() {
    if (this.value === 6 ) {
      return "ship"
    }
    if (this.value === 5 ) {
      return "captain"
    }
    if (this.value === 4 ) {
      return "crew"
    }
    return this.value
  }

  render() {
    return (
      <button class="dice-button">
        <div class="button-hover">{this.renderText()}</div>
        <div class="button-value">{this.value}</div>
      </button>
    );
  }
}
