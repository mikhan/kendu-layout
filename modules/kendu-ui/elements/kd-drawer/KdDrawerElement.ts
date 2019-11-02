import { LitElement, html, css, unsafeCSS, property, customElement } from 'lit-element'
import style from './style.scss'

console.log(style.toString())

@customElement('kd-drawer')
export default class KdDrawerElement extends LitElement  {  
  open () {
    this.toggle(true)
  }
  
  close () {
    this.toggle(false)
  }
  
  toggle (isOpen?: boolean): boolean {
    return this.toggleAttribute('open', isOpen)
  }
  
  get isOpen(): boolean {
    return this.hasAttribute('open')
  }
  
  render() {
    return html`
      <header class="__header">
        <button
          id="drawerToggler"
          class="__toggler"
          type="button">
          <i class="fa-bars fa-lg fas"></i>
        </button>
        <slot name="header"></slot>
      </header>
      <slot class="__content"></slot>`
  }
  
  static get styles() {
    return css`${unsafeCSS(style.toString())}`
  }
}