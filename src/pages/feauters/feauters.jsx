/** @format */

import React from "react";
import { FeautersHero } from "./components/feauters_hero/feauters_hero";
import { FeautersLogoSection } from "./components/feauters_logo-section/feauters_logo-section";
import { FeautersOurtCards } from "./components/feauters_ourt-cards/feauters_ourt-cards";
import { FeautersClients } from "./components/feauters_clients/feauters_clients";
import { FeautersQuestions } from "./components/feauters_questions/feauters_questions";

export const Feauters = () => {
  return (
    <div>
      <FeautersHero />
      <FeautersLogoSection />
      <FeautersOurtCards />
      <FeautersClients />
      <FeautersQuestions />
    </div>
  );
};
