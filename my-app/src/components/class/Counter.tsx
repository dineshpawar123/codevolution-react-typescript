import { Component } from 'react'

type CounterState = {
    count: number
  }

type CounterProps = {
  message: string
}

// export class CounterNew extends Component<{},CounterState> { //if no props
// export class CounterNew extends Component<CounterProps> { //if no state

export class CounterNew extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }


  render() {
    return (
      <div>

        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}