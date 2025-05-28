import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
        <section className={"home-section"}>
            <CompanionCard
                id={12}
                name={"Neura the Brainy Explorer"}
                topic={"Neural Network of the Brain"}
                subject={"science"}
                duration={45}
                color={"#ffda6e"}
            />
            <CompanionCard
                id={14}
                name={"Councy the Number Wizard"}
                topic={"Derivatives and Integrals"}
                subject={"math"}
                duration={32}
                color={"#FF6B6B"}
            />
            <CompanionCard
                id={1432}
                name={"Verba the Vocab Builder"}
                topic={"Language Mastery"}
                subject={"english literature"}
                duration={12}
                color={"#bde7af"}
            />
        </section>
        <section className={"home-section"}>
            <CompanionsList
                title={"Recently Completed Sessions"}
                companions={recentSessions}
                classNames={"w-2/3 max-lg:w-full"}
            />
            <CTA/>
        </section>
    </main>

  )
}

export default Page