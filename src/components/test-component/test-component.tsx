import { Component, Prop, h } from '@stencil/core';
import { addNumber } from '../../utils/utils';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
})
export class TestComponent {
  /**
   * Label of the button
   * */
  @Prop() label: string;

  /**
   * Value of the button
   */
  @Prop() value: number;

  /**
   * Function to increase the button's value by 1
   * @returns value plus 1
   */
  private count() {
    return this.value = addNumber(this.value)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.count()}>{this.label}</button>
        <p>{this.value}</p>
      </div>
    )
  }
}
