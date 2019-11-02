import { LitElement, html, css, unsafeCSS, property, customElement } from 'lit-element'
import style from './style.scss'

@customElement('kd-app')
export default class KdAppElement extends LitElement  {    
  render() {
    return html`<slot></slot>`
  }
  
  static get styles() {
    return css`${unsafeCSS(style.toString())}`
  }
}
