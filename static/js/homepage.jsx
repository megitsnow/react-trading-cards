'use strict';

function Homepage(props) {
  return (
    <React.Fragment>
      <h2><em>Welcome {props.user}!</em></h2>
      <a href="/cards">Trade your cards</a><br></br>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage user = "Balloonicorn"/>, document.querySelector('#app'));
