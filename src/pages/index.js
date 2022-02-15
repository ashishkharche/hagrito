/*
{
"title": "Index page of the site",
  "description": "This is the Index page or home page of the site. "
}
*/
import React from "react";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {Community, Intro,} from "../components";

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    // Add Netlify Identity script
    if (typeof window !== "undefined") {
        // browser code
        const document = window.document;
        let script = document.createElement("script");
        script.innerHTML = `
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    `;
        document.head.appendChild(script);
    }

    return (
        <div className="main">
            <Layout
                className="my-2 mx-auto w-full max-w-screen-lg px-8 shadow-none"
                title={`${siteConfig.title}`}
                description={`${siteConfig.tagline}`}
            >
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <main className="mx-auto max-w-screen-lg p-6 md:p-10">
                    <Intro/>
                    <Community/>
                </main>
            </Layout>
        </div>
    );
}
