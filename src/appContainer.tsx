import * as React from 'react';
import { connect } from 'react-redux';
import { State } from './reducers';
import { App } from './app';
import { fetchFilteredCardsAction, updateSearchTermsAction } from './common/actions';
import { SearchTerms, SearchOrder } from './model';

const mapStateToProps = (state: State, ownProps: any) => {
    let searchTerms = null;  
    if (ownProps.location.query.q) {
        const q = ownProps.location.query.q;
        const page = +ownProps.location.query.page || 1;
        const order = ownProps.location.query.order as SearchOrder || SearchOrder.Name;

        searchTerms = {
            q: q,
            page: page,
            order: order
        } as SearchTerms;
    }
    return {
        children: ownProps.children,
        searchTerms: searchTerms
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchFilteredCards: (params: SearchTerms) => dispatch(fetchFilteredCardsAction(params)),
    updateSearchTerms: (params: SearchTerms) => dispatch(updateSearchTermsAction(params))
});

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);