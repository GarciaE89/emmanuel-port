import React from "react";
import PortfolioCard from "./PortfolioCard";
import Gametradez from "../../assets/projects-pics/Gametradez.png";
import BudgetTracker from "../../assets/projects-pics/pwa-budget-tracker.png";
import PassWordGenerator from "../../assets/projects-pics/password generator.png";
import Ecommerce from "../../assets/projects-pics/E-Commerce-backend.png";
import TextMeToday from "../../assets/projects-pics/Text-me-Today.png";
import MarketPlace from "../../assets/projects-pics/Markplace.png";



function Portfolio() {
    return (
        <div>
            <h1 className="page-title">
                Projects
            </h1>
            <section className="flex-row">
                <PortfolioCard title="Gametradez" assetpath={Gametradez}
                url="https://protected-anchorage-01372.herokuapp.com/"
                    githuburl="https://github.com/GarciaE89/gametradez"
                />

                <PortfolioCard title="PWA Budget Tracker" assetpath={BudgetTracker} 
                url=" https://secret-castle-54232.herokuapp.com/"
                    githuburl="https://github.com/GarciaE89/PWA-Budget-Tracker" />

                <PortfolioCard title="E-Commerce Back end" assetpath={Ecommerce}
                url="https://www.youtube.com/watch?v=TmH8rRYwcTM"
                    githuburl="https://github.com/GarciaE89/E-commerce-Back-End" />

                <PortfolioCard title="Random Password Generator" assetpath={PassWordGenerator} 
                url="https://garciae89.github.io/your-password-is-incorrect/"
                    githuburl="https://github.com/GarciaE89/your-password-is-incorrect"
                />

                <PortfolioCard title="Text me Today" assetpath={TextMeToday}
                 url="https://garciae89.github.io/text-me-today/"
                    githuburl="https://github.com/GarciaE89/text-me-today"
                />

                <PortfolioCard title="Marketplace" assetpath={MarketPlace} 
                url="https://mysterious-garden-73946.herokuapp.com/"
                    githuburl="https://github.com/austinxewell/Full-Stack-Marketplace"
                />

            </section>
        </div>

    );

}

export default Portfolio;
