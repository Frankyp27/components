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
      return (
        <div>This is a placeholder for the Issue Filter.</div>
      )
    }
  }
  class IssueTable extends React.Component {
    render() {
      return (
        <div>This is a placeholder for a table of Issues.</div>
      )
    }
  }
  class IssueAdd extends React.Component {
    render() {
      return (
        <div>This is a placeholder for an Issue Add entry form.</div>
      )
    }
  }
  class IssueLists extends React.Component {
    render() {
      return (
        <div>
          <h1>Issue Tracker</h1>
          <IssueFilter />
          <hr />
          <IssueTable />
          <hr />
          <IssueAdd />
        </div>
      );
    }
  }
  ReactDOM.render(<IssueLists />, contentNode); // Render the component inside the content Node
  