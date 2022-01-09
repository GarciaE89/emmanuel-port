import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";


function Portfolio() {
    return (
        <div>
            <h1 className="page-title">
                Projects
            </h1>
            <section className="flex-row">
                <PortfolioCard title="Gametradez" assetpath={require(`../../assets/projects-pics/Gametradez.png`).default
                } url="https://protected-anchorage-01372.herokuapp.com/"
                    githuburl="https://github.com/GarciaE89/gametradez"
                />

                <PortfolioCard title="PWA Budget Tracker" assetpath={require(`../../assets/projects-pics/pwa-budget-tracker.png`).default
                } url=" https://secret-castle-54232.herokuapp.com/"
                    githuburl="https://github.com/GarciaE89/PWA-Budget-Tracker" />

                <PortfolioCard title="E-Commerce Back end" assetpath={require(`../../assets/projects-pics/E-Commerce-backend.png`).default
                }
                    githuburl="https://github.com/GarciaE89/E-commerce-Back-End" />

                <PortfolioCard title="Random Password Generator" assetpath={require(`../../assets/projects-pics/password generator.png`).default
                } url="https://garciae89.github.io/your-password-is-incorrect/"
                    githuburl="https://github.com/GarciaE89/your-password-is-incorrect"
                />

                <PortfolioCard title="Text me Today" assetpath={require(`../../assets/projects-pics/Text-me-Today.png`).default
                } url="https://garciae89.github.io/text-me-today/"
                    githuburl="https://github.com/GarciaE89/text-me-today"
                />

                <PortfolioCard title="Marketplace" assetpath={require(`../../assets/projects-pics/Markplace.png`).default
                } url="https://mysterious-garden-73946.herokuapp.com/"
                    githuburl="https://github.com/austinxewell/Full-Stack-Marketplace"
                />

            </section>
        </div>

    );

}

export default Portfolio;
