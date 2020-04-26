import React, {Component} from 'react';
import Who from './Content/Who';
import Offer from './Content/Offer';
import Benefits from './Content/Benefits';
import Choose from './Content/Choose';
import How from './Content/How';
import Credentials from './Content/Credentials';
import PsychologyBenefits from './Content/PsychologyBenefits';

class Main extends Component {
    render() {
        return(
            <div>
                <Who />
                <Offer />
                <Benefits />
                <Choose />
                <How />
                <Credentials />
                <PsychologyBenefits />
            </div>
        );
    }
}

export default Main;