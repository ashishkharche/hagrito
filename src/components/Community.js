import React from "react";

export const Community = () => {
    return (
        <section className="my-20">
            <h2 className="mb-8 text-3xl font-semibold md:text-4xl">Find us!</h2>
            <br/>
            <ul className="grid gap-6 sm:grid-cols-2 xl:gap-8">
                <li>
                    <a
                        href="https://www.patreon.com/AnimeSummit"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Digital-Patreon-Logo_FieryCoral.png"
                                height="100px"
                            />
                            <h3 className="font-bold">Patreon</h3>
                            <p>Become a Patreon!</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="http://discord.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Discord_2021_Logo_(Blue_Inverted).svg"
                                height="100px"
                            />
                            <h3 className="font-bold">Discord</h3>
                            <p>Join our Discord!</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="http://podcast.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img src="/img/links/Google_Podcasts_icon.svg" height="100px"/>
                            <h3 className="font-bold">Google Podcasts</h3>
                            <p>Listen on Google Podcasts</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a
                        href="http://itunes.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img src="/img/links/ITunes_logo.svg" height="100px"/>
                            <h3 className="font-bold">iTunes</h3>
                            <p>Listen on iTunes</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="https://open.spotify.com/show/4v7eS6Ydpl4nuXktb3dnBQ?si=m9wB5j40QZORc_odJ6lwSA"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Spotify_logo_without_text.svg"
                                height="100px"
                            />
                            <h3 className="font-bold">Spotify</h3>
                            <p>Listen on Spotify</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="http://yt.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Logo_of_YouTube_(2015-2017).svg"
                                height="100px"
                            />
                            <h3 className="font-bold">Youtube</h3>
                            <p>Watch on Youtube</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a
                        href="http://asex.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/animesummitextra.jpg"
                                height="100px"
                            />
                            <h3 className="font-bold">Anime Summit Extra</h3>
                            <p>Watch Anime Summit Extra</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a
                        href="mailto:Admin@animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Email_icon.svg"
                                height="100px"
                            />
                            <h3 className="font-bold">Email</h3>
                            <p>Contact Anime Summit</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a
                        href="http://ig.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Instagram_logo_2016.svg"
                                height="100px"
                            />
                            <h3 className="font-bold">Instagram</h3>
                            <p>Pictures on Insta!</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a
                        href="http://twitter.animesummit.net/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/links/Twitter_bird_logo_2012.svg"
                                height="100px"
                            />
                            <h3 className="font-bold">Twitter</h3>
                            <p>Be up-to-date on Twitter!</p>
                        </div>
                    </a>
                </li>

            </ul>
            <p className="mt-8">
                Thank you for listening to the podcast! To talk to the hosts, just join the {" "}
                <a className="hover:underline" href="http://discord.animesummit.net/">
                    discord
                </a>
                .
            </p>
        </section>
    );
};
