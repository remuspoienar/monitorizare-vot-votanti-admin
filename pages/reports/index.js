import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import Error from '../../components/Error';
import { getIncidents } from '../../redux/actions/incidentsActions';
import { getVisibleIncidents } from '../../redux/reducers/incidents';
import s from './styles.css';

class IncidentsPage extends React.Component {

    static propTypes = {
        incidents: PropTypes.array,
    };

    componentDidMount() {
        store.dispatch(getIncidents());
    }

    render() {
        const { error } = this.props;

        return (
            <Layout className={s.content}>
                <Panel>
                    {error &&
                        <Error error={error} />
                    }
                    {!error &&
                        <p>Statistici</p>
                    }
                </Panel>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    incidents: getVisibleIncidents(state.incidents),
    error: state.incidents.error,
});

export default connect(
    mapStateToProps
)(IncidentsPage);
