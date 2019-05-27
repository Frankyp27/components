const contentNode = document.getElementById('contents');
//const continents = ['Africa','America','Asia','Australia','Europe'];
//const message = continents.map(c => `Hello ${c}!`).join(' ');
//const component = <p>{message}</p>;      // A simple JSX component
//ReactDOM.render(component, contentNode);  // Render the component inside the content Node

// class IssueList extends React.Component {
//   render() {
//     return (
//       <div>This is a placeholder for the issue list.</div>
//     );
//   }
// }
// ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node


class IssueFilter extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is a placeholder for the Issue Filter.'
    );
  }
}
class IssueTable extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is a placeholder for a table of Issues.'
    );
  }
}
class IssueAdd extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is a placeholder for an Issue Add entry form.'
    );
  }
}
class IssueLists extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Issue Tracker'
      ),
      React.createElement(IssueFilter, null),
      React.createElement('hr', null),
      React.createElement(IssueTable, null),
      React.createElement('hr', null),
      React.createElement(IssueAdd, null)
    );
  }
}
ReactDOM.render(React.createElement(IssueLists, null), contentNode); // Render the component inside the content Node