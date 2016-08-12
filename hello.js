ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById('other')
);