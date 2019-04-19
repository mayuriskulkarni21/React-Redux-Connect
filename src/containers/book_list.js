import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever this function will return, will show up as a prop of this connected component
    return {
        books: state.books
    }
}

// Anything returned by the 'mapDispatchToProps' function will end up as a props of the BookList component
function mapDispatchToProps(dispatch) {
    // whenever 'selectBook' is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//'mapDispatchToProps' function will bind 'selectBook' function to props of this component

export default connect(mapStateToProps, mapDispatchToProps)(BookList);