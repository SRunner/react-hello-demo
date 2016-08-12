var LikeButton = React.createClass({
    getInitialState: function () {
        return this.state = {liked:false};
    },
    handle: function () {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handle}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
});
ReactDOM.render(
    <LikeButton/>,
    document.getElementById("example")
);