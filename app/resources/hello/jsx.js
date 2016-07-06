
var helloStyle = {
    fontSize: '12px',
    backgroundColor: '#fff',
    margin: '10px'
};

<div>
    <h1 className="hello" style={helloStyle}>hello {this.props.name}</h1>
    {this.props.children}
</div>