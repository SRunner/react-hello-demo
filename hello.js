let ReactHello = React.createClass({
  render: function () {
    return (
      <h1>Hello World!{this.props.name}</h1>
    )
  }
});
let Heheda = React.createClass({
  getInitialState:function () {
    return {name:'dann'}

  },
  render:function(){
  return (
    <div>
      <ReactHello name={this.state.name}/>
    </div>
  )
}
});

ReactDOM.render(
  <Heheda />,
  document.getElementById('dann'));