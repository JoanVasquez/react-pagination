import React from "react";
import { fetchTodo } from "../services/TodoService";
import Paginator from "paginator";
import PaginatorComponet from "./PaginatorComponent";

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: null,
      paginatedTodos: null,
      paginatorData: null,
      pages: null,
      pageSize: 5
    };
    this.setPagination = this.setPagination.bind(this);
  }

  async componentWillMount() {
    try {
      let todos = await fetchTodo();
      this.setState({ todos });
      this.setPagination(1);
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {this.state.paginatedTodos
                  ? this.state.paginatedTodos.map(todo => (
                      <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "true" : "false"}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
          <div className="row">
            {this.state.paginatorData && this.state.pages ? (
              <PaginatorComponet
                setPagination={this.setPagination}
                paginatorData={this.state.paginatorData}
                pages={this.state.pages}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  setPagination(currentPage) {
    let paginator = new Paginator(this.state.pageSize, 7);
    let paginatorData = paginator.build(this.state.todos.length, currentPage);
    let pages = [
      ...Array(paginatorData.last_page + 1 - paginatorData.first_page).keys()
    ].map(index => paginatorData.first_page + index);
    let paginatedTodos = this.state.todos.slice(
      paginatorData.first_result,
      paginatorData.last_result + 1
    );
    this.setState({ paginatedTodos, paginatorData, pages });
  }
}

export default TodoComponent;
