import React from 'react';
import {Avatar} from './components/avatar';
import {Social} from './components/social';
import {Info} from './components/info';
import {SectionWithProgress} from './components/section-with-progress';
import {withParams} from '../../components/with-params';
import {API} from '../../constants/api';

class _UserPage extends React.Component {
    state={
        user: null,
        userNotFound: true,
    }
    async componentDidMount() {
        const usersJson = await fetch(`${API.USERS}/${this.props.params.contactId}`);
        const user = await usersJson.json();
        this.setState({user, userNotFound: user === undefined});
    }

    render() {
        if (this.state.userNotFound) {
            return 'User is not found';
        }
        if (this.state.user === null) {
            return (
                <div>
                    <h1>Loging!</h1>
                </div>
            );
        }

        return (
            <div className="user-page">
                <div className="user-page_avatar" onClick={this.addUser}>
                    <Avatar
                        userName={this.state.user.username}
                        info={this.state.user.info}
                        avatar={this.state.user.avatar}
                    />
                    <Social website={this.state.user.website}
                        twitter={this.state.user.twitter}
                        facebook={this.state.user.facebook}
                        instagram={this.state.user.instagram}/>
                </div>
                <div className="user-page_info">
                    <Info fullName={this.state.user.fullName}
                        email={this.state.user.email}
                        phone={this.state.user.phone}
                        mobile={this.state.user.mobile}
                        address={this.state.user.address && this.state.user.address.street}
                    />
                    <div className="user-page_progress">
                        <SectionWithProgress items = {this.state.user.languages}
                            titel="Языки"
                            className="section_languages"/>
                        <SectionWithProgress items = {this.state.user.technologies}
                            titel="Технологии"
                            className="section_technologies"/>
                    </div>

                </div>
            </div>
        );
    }
}

export const UserPage = withParams(_UserPage);

