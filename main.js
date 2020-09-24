import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    )
  }
}

render(
  <MyComponent id='a' class='b'>
    <div>ssss</div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
)
