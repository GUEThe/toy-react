import {createElement,render} from './toy-react'

class MyComponent {
    render() {
        return <div />
    }
}

render(
  <MyComponent id="a" class="b">
    <div>ssss</div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
);
