import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import Error from '../../components/Error';
import IncidentsByType from '../../components/reports/IncidentsByType'

import { getReports } from '../../redux/actions/reportsActions';
import s from './styles.css';

class ReportsPage extends React.Component {

    static propTypes = {
        data: PropTypes.object,
    };

    componentDidMount() {
        store.dispatch(getReports());
    }

    render() {
        const { data, error } = this.props;

        return (
            <Layout className={s.content}>
                <Panel>
                    {error &&
                        <Error error={error} />
                    }
                    {!error &&
                        <div>
                          <IncidentsByType data={data.incidentsByType} />
                        </div>
                    }
                </Panel>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    data: state.reports.data,
    error: state.incidents.error,
});

export default connect(
    mapStateToProps
)(ReportsPage);
