import React, { Component } from 'react';

export default class Credentials extends Component {
    render() {
        return (
            <div class="credentials container">
                <h3> Credentials </h3>
                <p> Growing Wise is run by me, Tony Cross.
                I have years of horticultural experience working in many popular parks in Leeds, building gardens at Chelsea and Harrogate Shows, and working with volunteers and young people.
                My training includes; Royal Horticultural Society qualifications at advanced level, a foundation degree in Plant Use and Design and City and Guilds qualifications in Horticulture. 
                I have recently completed a CACHE course on ‘Understanding Children and Young People’s Mental Health’ and have DBS and paediatric first aid. 
                </p>
                <p> <strong> See What the teachers say </strong> </p>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../static/img/logo.png" alt="logo"/>
                        <blockquote class="blockquote">
                            <p>
                            Tony is well resourced and has all of the equipement with him needed for each session which has obviously been well thought through, even dwn to having pencials attached to clipsboards for the 
                            younger children, Everything is organised in this way enabled the lessons to run smoothly. Children were asked to create a bug hotel in one session and loved using different materials to make their own which was then put together
                            and put into the woord. In the rain gauge lesson bottles were prepared for the children and they enjoyed putting together the gauge and measuring the water each week. 
                            </p>
                            <p>
                            Lessons showed progress and objectives taught were clear and given to the children in a child friendly way. Children knew what they were learning in each sessiong and the previous session was always recapped.
                            </p>
                            <p>
                            Lessons were exciting, engaging and fun children loved the 'Bee Game' and were unaware they were learning whilst having a great time.
                            </p>
                            <footer class="blockquote-footer"> Ms Theaker Y2 Colton Primary School </footer>
                        </blockquote>
                    </div>
                    <div class="carousel-item">
                        <blockquote class="blockquote">
                            <p>
                            During the visit, Tony was a real pleasure to work with, as he showed real enthusiasm when delivering the subject material, which was engaging for the pupils. Tony's subject knowlegde is very in-depth and 
                            he is becoming more skilled at delivering this at a level to develop the pupils' understanding. He, also asked the class though provoking questions, which helped to stimulate different discussion. Before the visit,
                            Tony was very keen to liaise with myself on overall aims and objectives of the visit, which he linked to the nationcal curriculum, From this, he planned an in-depth visit for the pupils, which was both educational and fun,
                            with appropriatea age-related activities. After the visit, the pupils were able to use their experiences, to put their learning into real-life contexts back in the classroom. The visit was a very enjoyable experience for the pupils
                            which was well planned and led by Tony Cross.
                            </p>
                            <footer class="blockquote-footer"> Mr Barker Y6 Colton Primary School </footer>
                        </blockquote>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                <p> <strong> As we are based in Leeds we cannot as yet cover the country but if you think you’d like to run a Growing Wise club near you, please contact me, I’d love to help you get started. </strong> </p>
            </div>
        );
    }
}
