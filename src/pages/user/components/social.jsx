import React from 'react';
import '../style.css';
import web from '../img/web.svg';
import twit from '../img/twitter.svg';
import fb from '../img/fb.svg';
import inst from '../img/instagram.svg';

export class Social extends React.Component {
    render() {
        return (
            <div className="section_social">
                <div className="section_social_text">
                    <div><img className="size" src={web} alt=""/>Website</div>
                    <div className="section_social_text_value">{this.props.website}</div>
                </div>
                <div className="section_social_text">
                    <div><img className="size" src={twit} alt=""/>Twitter </div>
                    <div className="section_social_text_value">{this.props.twitter}</div>
                </div>
                <div className="section_social_text">
                    <div><img className="size" src={fb} alt=""/>Facebook</div>
                    <div className="section_social_text_value">{this.props.facebook}</div>
                </div>
                <div className="section_social_text">
                    <div><img className="size" src={inst} alt=""/>Instagram</div>
                    <div className="section_social_text_value">{this.props.instagram}</div>
                </div>
            </div>
        );
    }
}

