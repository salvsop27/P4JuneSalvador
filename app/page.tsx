"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "pink" })}>
            Sophies Website&nbsp;
          </span>
          <br />
          <span className={title()} />
          <div className={subtitle({ class: "mt-4" })}>By Sophie Salvador</div>
        </div>

        <div className="flex gap-3">
          <ConfettiButton />

          <div className={spinning ? "animate-spin" : ""}>
            <Button radius="full" variant="ghost" onPress={spinButton}>
              Spin
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span />
          </Snippet>
        </div>
      </section>
      <img alt="" src="" />
    </>
  );
}
